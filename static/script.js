// Output Elements
const src_code_output_elm = document.getElementById('src_code_output');
const Preview_output_btn_elm = document.getElementById('Preview_Output');
const Copy_output_btn_elm = document.getElementById('Copy_Output');
const view_output_elm = document.getElementById('view_output');

// Input Elements
const src_code_input_elm = document.getElementById('src_code_input');
const Preview_input_btn_elm = document.getElementById('Preview_Input');
const Copy_input_btn_elm = document.getElementById('Copy_Input');
const view_input_elm = document.getElementById('view_input');



function add_script_for_mathml(){
    let src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"
    let scriptElm = document.createElement('script');
    scriptElm.src = src;
    scriptElm.id = 'mathml_script_id';
    document.body.appendChild(scriptElm);
}

async function render_mathml(){
    let response = await fetch('http://127.0.0.1:5000/getiodata');
    let response_json = await response.json();
    let src_code_output = await response_json['src_code_output'];
    let src_code_input = await response_json['src_code_input'];

    view_output_elm.innerHTML = src_code_output;
    view_output_elm.classList = 'box';
    Preview_output_btn_elm.disabled = true;

    view_input_elm.innerHTML = src_code_input;
    view_input_elm.classList = 'box';
    Preview_input_btn_elm.disabled = true;

    add_script_for_mathml();

}

async function click_to_copy(src_code_elm) {
    src_code_elm.select();
    let response = await fetch('http://127.0.0.1:5000/getiodata');
    let response_json = await response.json();
    let src_code_output = await response_json['src_code_output'];
    let src_code_input = await response_json['src_code_input'];

    if (src_code_elm.id==='src_code_output'){
        await navigator.clipboard.writeText(src_code_output);
    
    }
    else{
        await navigator.clipboard.writeText(src_code_input);
    }
    alert('Code copied successfully');

}


Preview_output_btn_elm.addEventListener('click', render_mathml);
Copy_output_btn_elm.addEventListener('click', () => click_to_copy(src_code_output_elm) );

Preview_input_btn_elm.addEventListener('click', render_mathml);
Copy_input_btn_elm.addEventListener('click', ()=> click_to_copy(src_code_input_elm));