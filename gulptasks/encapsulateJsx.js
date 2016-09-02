const _path = require('path');

module.exports = function EncapsulateJsx({types: t}) {
    return {
        visitor: {
            JSXOpeningElement: function transform(path, state) {
                if (path.node.encapsulatedAlready) {
                    return;
                }
                const filename = _path.basename(state.file.log.filename, '.js');
                const className = filename;

                const classnameAttributes = path.node.attributes
                .filter(a=>t.isJSXAttribute(a) && t.isJSXIdentifier(a.name, {name: 'className'}));
                if (!classnameAttributes.length) {
                    const node = t.jSXOpeningElement(
                        path.node.name,
                        path.node.attributes.concat([t.jSXAttribute(
                            t.jSXIdentifier('className'),
                            t.stringLiteral(className)
                        )]),
                        path.node.selfClosing
                    );
                    node.encapsulatedAlready = true;
                    path.replaceWith(node);
                } else {
                    classnameAttributes.forEach((attr)=>{
                        if (t.isStringLiteral(attr.value)) {
                            const node = t.jSXOpeningElement(
                                path.node.name,
                                path.node.attributes.map((curAttr)=>{
                                    if (attr !== curAttr) return curAttr;
                                    return t.jSXAttribute(
                                        t.jSXIdentifier('className'),
                                        t.stringLiteral(`${attr.value.value} ${className}`)
                                    );
                                }),
                                path.node.selfClosing
                            );
                            node.encapsulatedAlready = true;
                            path.replaceWith(node);
                        } else if (t.isJSXExpressionContainer(attr.value)) {
                            const node = t.jSXOpeningElement(
                                path.node.name,
                                path.node.attributes.map((curAttr)=>{
                                    if (attr !== curAttr) return curAttr;
                                    return t.jSXAttribute(
                                        t.jSXIdentifier('className'),
                                        t.jSXExpressionContainer(
                                            t.binaryExpression(
                                                '+',
                                                attr.value.expression,
                                                t.stringLiteral(` ${className}`)
                                            )
                                        )
                                    );
                                }),
                                path.node.selfClosing
                            );
                            node.encapsulatedAlready = true;
                            path.replaceWith(node);
                        } else {
                            throw new Error('Babel Plugin Encapsulate JS: unknown attribute type');
                        }
                    });
                }
            },
        },
    };
}