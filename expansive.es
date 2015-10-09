Expansive.load({
    transforms: [ {
        name: 'canon',
        script: `
            public function renderCanonical() {
print("HERE", meta.dest)
                if (meta.dest.basename.trimExt() == 'index') {
                    write('<link href="' + meta.abs.dirname + '/" rel="canonical" />')
                }
            }
        `
    } ]
})
