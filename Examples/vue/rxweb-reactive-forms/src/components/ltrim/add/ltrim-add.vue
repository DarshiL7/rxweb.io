
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Free Text</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.freeText" type="text" name="name" />
        <div v-if="userFormGroup.controls.freeText.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.freeText.errors.ltrim.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class LtrimAddComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
