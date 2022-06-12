import re 

patterns = {
    r'<mi>&#38;</mi><mo>\+</mo>': r'<mo>+</mo>',
    r'<mi>&#38;</mi><mo>=</mo>': r'<mo>=</mo>',
    r'\.,': '.',
    r',</p>': r'</p>',
    r'<p>,':r'<p>',
    r'<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>,</mo><mo>,</mo>':r'<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow>',
    r'<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>,</mo>': r'<math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mrow>',
    r'<mo>,</mo><mo>,</mo></mrow></math>':r'</mrow></math>',
    r'<mo>,</mo></mrow></math>':r'</mrow></math>',

}

def clean_function(src_code_input):

    for pattern, repl in patterns.items():
        src_code_input = re.sub(pattern, repl, src_code_input)

    for pattern, repl in patterns.items():
        src_code_input = re.sub(pattern, repl, src_code_input)
        
    return src_code_input
