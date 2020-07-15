<template>

  <div id="signup">
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2">
          <label class="signup">First Name:</label>
        </b-col>
        <b-col sm="3">
          <b-form-input required="true" v-model="fname" type="text"></b-form-input>
        </b-col>

        <b-col sm="2">
          <label class="signup" style="aligh-right">Last Name:</label>
        </b-col>
        <b-col sm="3">
          <b-form-input v-model="lname" :state="false" type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label class="signup" style="aligh-right">Email:</label>
        </b-col>
        <b-col sm="3">
          <b-form-input v-model="email" type="email"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label class="signup" style="aligh-right">Password:</label>
        </b-col>
        <b-col sm="3">
          <b-form-input v-model="password" type="password"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3" class="signup">
          <b-form-group label="Gender">
            <b-form-radio-group v-model="gender" :options="goptions" name="radio-inline"></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label class="signup" style="aligh-right">Mobile:</label>
        </b-col>
        <b-col sm="3" class="signup">
          <b-form-input v-model="mnumber" type="number"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label class="signup" style="aligh-right">Dob:</label>
        </b-col>
        <b-col sm="3" class="signup">
          <b-form-input v-model="dob" type="date"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2"></b-col>
        <b-col sm="1">
        
          <b-button variant="success" @click="submit">Success</b-button>
        </b-col>
        <b-col sm="1">
          <b-button variant="danger" @click="reset">Reset</b-button>
        </b-col>
      </b-row>
    </b-container>
    <label>{{json}}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: "",
      mnumber: "",
      dob: "",
      gender: "",
      json: "",
      goptions: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" },
        { text: "Others", value: "Others" }
      ]
    };
  },
  methods: {
    reset() {
      (this.fname = ""),
        (this.lname = ""),
        (this.email = ""),
        (this.password = ""),
        (this.mnumber = ""),
        (this.dob = ""),
        (this.gender = ""),
        (this.json="");
        
    },
    submit() {
      this.json= [
      this.fname,
        this.lname,
        this.email,
        this.password,
        this.mnumber,
        this.dob,
        this.gender];
    }
  }
};
</script>
<style>
.signup {
  font-family: 100px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: grey;
  font-size: 20px;
}
</style>
