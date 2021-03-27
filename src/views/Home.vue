<template>
  <div>
    <v-row
      no-gutters
      class="justify-center align-content-center"
      style="height: 100%;"
    >
      <v-col cols="12" xl="5" lg="5" md="5" sm="7">
        <div class="form">
          <div class="detail">
            <h1 class="text-lg-center">Test Form and validation</h1>
            <br />
            <h3>First Name</h3>
            <v-text-field
              label="Please fill first name"
              solo
              v-model="first_name"
              :error-messages="err_first_name"
            ></v-text-field>
            <h3>Last Name</h3>
            <v-text-field
              label="Please fill last name"
              solo
              v-model="last_name"
              :error-messages="err_last_name"
            ></v-text-field>

            <h3>Email</h3>
            <v-text-field
              label="Please fill email"
              solo
              v-model="email"
              :error-messages="err_email"
            ></v-text-field>

            <h3>Password</h3>
            <v-text-field
              type="password"
              label="Please fill password"
              solo
              v-model="password"
              :error-messages="err_password"
            ></v-text-field>

            <h3>Verify Password</h3>
            <v-text-field
              type="password"
              label="Please fill verify password"
              solo
              v-model="cfpassword"
              :error-messages="err_cfpassword"
            ></v-text-field>

            <h3>Gender</h3>
            <!-- <v-text-field
              label="Please select a gender"
              solo
              v-model="gender"
              :error-messages="err_gender"
            ></v-text-field> -->
            <v-select
              :items="items"
              label="Solo field"
              solo
              v-model="gender"
              :error-messages="err_gender"
            ></v-select>

            <v-btn color="success" width="100" @click="submit">Submit</v-btn>
            <div class="mt-10" v-if="result != null">
              <h3>Result</h3>
              <p>First name : {{ result.first_name }}</p>
              <p>Last name : {{ result.last_name }}</p>
              <p>Email : {{ result.email }}</p>
              <p>Gender : {{ result.gender }}</p>
            </div>
          </div>
        </div>
      </v-col>

      <!-- <v-col cols="12" xl="5" lg="5" md="5" sm="7">
        <pre>{{ $v.cfpassword }}</pre>
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Home",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      cfpassword: "",
      gender: "",
      items: ["male", "female"],
      // -----
      result: null,
      // ----- error msg
      err_first_name: "",
      err_last_name: "",
      err_email: "",
      err_password: "",
      err_cfpassword: "",
      err_gender: "",
    };
  },
  validations: {
    first_name: {
      required,
    },
    last_name: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
    },
    cfpassword: {
      sameAspassword: sameAs("password"),
    },
    gender: {
      required,
    },
  },
  watch: {
    first_name() {
      if (this.first_name != "") {
        this.err_first_name = "";
      }
    },
    last_name() {
      if (this.last_name != "") {
        this.err_last_name = "";
      }
    },
    email() {
      if (this.email != "") {
        this.err_email = "";
      }
      if (!this.$v.email.email) {
        this.err_email = "Email is not correct !";
      }
    },
    password() {
      if (this.password != "") {
        this.err_password = "";
      }
    },
    cfpassword() {
      if (this.cfpassword != " ") {
        this.err_cfpassword = "";
      }
      if (!this.$v.cfpassword.sameAspassword) {
        this.err_cfpassword = "Verify password must same as password";
      }
    },
    gender() {
      if (this.gender != "") {
        this.err_gender = "";
      }
    },
  },
  methods: {
    submit() {
      let firstname = this.$v.first_name.required;
      let lastname = this.$v.last_name.required;
      let email = this.$v.email.required && this.$v.email.email;
      let password = this.$v.password.required;
      let cfpassword = this.$v.cfpassword.sameAspassword;
      let gender = this.$v.gender.required;

      let allcondition =
        firstname && lastname && email && password && cfpassword && gender;

      let data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        cfpassword: this.cfpassword,
        gender: this.gender,
      };

      if (allcondition) {
        this.result = data;
      } else {
        this.result = null;
        if (this.first_name == "") {
          this.err_first_name = "please fill out this field";
        }
        if (this.last_name == "") {
          this.err_last_name = "please fill out this field";
        }
        if (this.email == "") {
          this.err_email = "please fill out this field";
        }
        if (this.password == "") {
          this.err_password = "please fill out this field";
        }
        if (this.cfpassword == "") {
          this.err_cfpassword = "please fill out this field";
        }
        if (this.gender == "") {
          this.err_gender = "please fill out this field";
        }
      }
    },
  },
};
</script>

<style scoped>
.form {
  background-color: #95a9c6;
  border-radius: 5px;
}
.detail {
  padding: 20px 50px 20px 50px;
}
</style>
