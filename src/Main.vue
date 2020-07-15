 <template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="info" >
    <b-navbar-brand href="#">Profile</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <router-link to="/">
          <b-button size="sm" variant="info">Login</b-button>
           </router-link>
         <router-link to="/signup">
          <b-button size="sm" variant="info">Sign-Up</b-button>
         </router-link>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-container>
    </b-container>
    <router-view>
        <b-container fluid>
  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-none">No State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-valid">Valid State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-valid" :state="true" placeholder="Valid input"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-invalid">Invalid State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-invalid" :state="false" placeholder="Invalid input"></b-form-input>
    </b-col>
  </b-row>
</b-container>
    </router-view>
</div>

</template>
<script>
export default {
}
</script>
<style>
.signup {
  font-family: 100px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: grey;
  font-size: 20px;
}
</style>
