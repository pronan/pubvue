#!/usr/bin/python3
import re
import os


targets = ['vue','lua']
exclude = [] #['base.lua', 'urls.lua', 'utils.lua', 'manage.lua', 'view.lua']
repls = [
    # (r'\(\) => \{\}','function () {return {}}'),
    # (r'\{\.\.\.(.+?)\}','Object.assign({}, \\1)') ,
    # (r'(let|const) ', 'var '),
    # (r'(\w+) \(\) \{', '\\1: function () {'),
    # (r'(\s*)for \(var (\w+) of ([\w\.]+)\) \{', r'\1for (var i=0; i < \3.length; i++) {\1  var \2 = \3[i]')
    (r'initialDict','initials'),
        # (r'checkbox_set','list_field_names'),
]
def replace(go=False):
    hits = {}
    for root,dirs,files in os.walk(os.getcwd()):
        for filespath in files:
            p = os.path.join(root,filespath)
            if '.' not in p or p.rsplit('.', 1)[1] not in targets:
                continue
            if filespath in exclude:
                continue
            # if 'bak\\' in p or 'utils\\' in p:
            #     continue
            res = []
            with open(p, encoding='u8') as f:
                for i, line in enumerate(f):
                    # if 'local ' in line or '--' in line:
                    #     res.append(line)
                    #     continue
                    for pat, new in repls:
                        if re.search(pat, line):
                            if p not in hits:
                                hits[p] = []
                            newline = re.sub(pat, new, line)
                            hits[p].append((i, line, newline))
                            line = newline
                            break
                    res.append(line)
            if go:
                open(p,'w',encoding='u8').write(''.join(res))

    for path, lines in hits.items():
        print(path)
        for i, line, newline in lines:
            print(str(i+1).rjust(6), line.strip(), '\n      ', newline.strip())


replace(1)


    
