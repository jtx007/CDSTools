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


first_comparison(*args, **kwargs)

- Compare two amino acid Chains 
- parameters:  args : object
 -- Data that contains an iterable or list-like objects 
- kwargs 
-- Extra keywrods to forward to the scheduler function 

## Examples 
    
    
second_comparison(*args, **kwargs)
- Compare two amino acid chains based on the types of amino acids  
- parameters:  args : object
 -- Data that contains an iterable or list-like objects 
- kwargs 
-- Extra keywrods to forward to the scheduler function

## Examples 


third_comparison(*args, **kwargs)
- Locates the selected amino acid 
- parameters:  args : object
 -- Data that contains an iterable or list-like objects 
- kwargs 
-- Extra keywrods to forward to the scheduler function

## Examples 

distance_1(*args, **kwargs)
- Calculates the distance from one specific amino acid to the substitution site
- parameters:  args : object
 -- Data that contains an iterable or list-like objects 
- kwargs 
-- Extra keywords to forward to the scheduler function

## Examples 

distance_2(*args, **kwargs)
- Calculates the disance from an amino acid site to a range of substitution site
- parameters:  args : object
 -- Data that contains an iterable or list-like objects 
- kwargs 
-- Extra keywords to forward to the scheduler function

## Examples

filter_results(*args)
- Filters the results returned after the amino acids have been compared 
- parameters:  args : object
 -- Data that contains an iterable or list-like objects 

## Examples





