---
title: toFloat
description: Convert the input to a float, or NAN if the input is not a float.
author: ajayojha
category: sanitization
type:decorators
linktitle: toFloat
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>Convert the input to a float, or NAN if the input is not a float.</p></div>

# Example  
Let's create a user model and define a property of 'amount' in the model.
<div component="app-code" key="toFloat-add-model"></div> 

Through Angular FormBuilder service we create FormGroup in the component.

<div component="app-code" key="toFloat-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="toFloat-add-html"></div> 
<div component="app-example-runner" ref-component="app-toFloat-add"></div>
