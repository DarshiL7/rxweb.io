
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Profile Picture</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.profilePicture" type="text" name="name" />
          <small class="form-text text-muted">Uploaded File must be in the file size range.<br/></small>
       <div v-if="userInfoFormGroup.controls.profilePicture.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.profilePicture.errors.fileSize.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { UserInfo } from './userInfo.model';

@Component
export default class FileSizeEditComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
