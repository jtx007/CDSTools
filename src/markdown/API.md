---
path: "/api"
date: "04-13-2020"
title: "API Reference"
---
This page gives an overview of all PDBTools objects,fuctions and methods. All classes and functions exposed in *PDBTools*. 

PDBTools has its own functions to start computations,compare, and analyze data. These general PDBTool functions are described below:

| Function | Description |
| ----------- | ----------- |
| first_comparison(*args, **kwargs) | Compare two amino acid chains |
| second_comparison(*args, **kwargs) | Compare two amino acid chains based on the types of amino acids |
|third_comparison(*args, **kwargs)| Locates the selected amino acid |
|distance_1 (*args, **kwargs)      | Calculates the distance from one specific amino acid to the substitution site |
|distance_2(*args, **kwargs) | Calculates the disance from an amino acid site to a range of substitution sites |
|filter_results(*args) | Filters the results returned after the amino acids have been compared. |


<span class="functionCall"><strong>first_comparison</strong>(*args, **kwargs)</span>

Compare two amino acid Chains 

<strong>Parameters:</strong> <span class="objectParams">args:object</span>
<p class="objectParamDef">Data that contains an iterable or list-like objects</p>
<span class="objectParamDef objectParams">kwargs</span> 
<p class="objectParamDef">Extra keywords to forward to the scheduler function</p> 

### Examples 

![comparison1](./comparison1.png)

![comparison1output](./comparison1output.png)
    
<br>
    
<span class="functionCall"><strong>second_comparison</strong>(*args, **kwargs)</span>

Compare two amino acid chains based on the types of amino acids  

<strong>Parameters:</strong>  <span class="objectParams">args:object</span>
<p class="objectParamDef">Data that contains an iterable or list-like objects</p>
<span class="objectParamDef objectParams">kwargs</span> 
<p class="objectParamDef">Extra keywords to forward to the scheduler function</p>

### Examples 

![comparison2](./comparison2.png)

![comparison2output](./comparison2output.png)

<br>


<span class="functionCall"><strong>third_comparison</strong>(*args, **kwargs)</span>

Locates the selected amino acid 

<strong>Parameters</strong>:  <span class="objectParams">args:object</span>
<p class="objectParamDef">Data that contains an iterable or list-like objects</p>
<span class="objectParamDef objectParams">kwargs</span> 
<p class="objectParamDef">Extra keywords to forward to the scheduler function</p>

### Examples 

![comparison3](./comparison_3.png)

![comparison3output](./comparison_3_output.png)

<br>




<span class="functionCall"><strong>distance_1</strong>(*args, **kwargs)</span>

Calculates the distance from one specific amino acid to the substitution site

<strong>Parameters:</strong>  <span class="objectParams">args:object</span>
<p class="objectParamDef">Data that contains an iterable or list-like objects</p>
<span class="objectParamDef objectParams">kwargs</span> 
<p class="objectParamDef">Extra keywords to forward to the scheduler function</p>

### Examples 

![distance1](./distance1.png)

![distance1output](./distance1output.png)

<br>

<span class="functionCall"><strong>distance_2</strong>(*args, **kwargs)</span>

Calculates the disance from an amino acid site to a range of substitution site

<strong>Parameters:</strong>  <span class="objectParams">args:object</span>
<p class="objectParamDef">Data that contains an iterable or list-like objects</p>
<span class="objectParamDef objectParams">kwargs</span> 
<p class="objectParamDef">Extra keywords to forward to the scheduler function</p>

### Examples

<span class="functionCall"><strong>filter_results</strong>(*args)</span>

Filters the results returned after the amino acids have been compared 

<strong>Parameters:</strong>  <span class="objectParams">args:object</span>
<p class="objectParamDef">Data that contains an iterable or list-like objects</p>

### Examples





