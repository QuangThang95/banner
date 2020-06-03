<template>
  <v-container>
    <div style="height:50px"></div>
    
    <!-- <CookieConsent transition="" :linkLabel="linkLabel||'Learn more'" :href="href"  :buttonLabel="buttonLabel?buttonLabel:'got it'" :class="changePosition" :key="position" :message = message /> -->

    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Change Position
        <small>top , right, left</small>
      </v-stepper-step>

      <v-stepper-content step="1" style="background:#f5f5f5">
            <b-form-group label="Stacked radios">
      <b-form-radio-group
        v-model="position"
        :options="options"
        :key="position"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

      <v-stepper-content step="2">
      <b-form-radio-group
        v-model="theme"
        :options="optionsTheme"
        name="radios-stacked-1"
        stacked
      ></b-form-radio-group>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn @click="e6 = 1" text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Learn mores Link</v-stepper-step>

      <v-stepper-content step="3">
        <b-form-input v-model="contentLink" placeholder="learn more"></b-form-input>
        <b-form-input v-model="contentHref" placeholder="Enter your website"></b-form-input>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn @click="e6 = 2" text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Custom Text</v-stepper-step>
      <v-stepper-content step="4">
        <b>Message</b>
        <b-form-textarea
      id="textarea"
      v-on:blur="focusOut"
      v-model="contentMessage"
      placeholder="Enter your message"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
        <!-- <b-form-input v-model="contentMessage" placeholder="Enter your website"></b-form-input> -->
        <div class="row">
        <div class="col-6">
          <b>Dismiss button text</b>
          <b-form-input v-on:blur="focusOut" v-model="contentHeader" placeholder="Enter your website"></b-form-input>
        </div>
        <div class="col-6">
          <b>Accept button text</b>
          <b-form-input v-on:blur="focusOut" v-model="contentDeny" placeholder="Enter your website"></b-form-input>
        </div>
        <div class="col-6">
          <b>Dismiss button text</b>
          <b-form-input v-on:blur="focusOut" v-model="contentAllow" placeholder="Enter your website"></b-form-input>
        </div>
        <div class="col-6">
          <b>Accept button text</b>
          <b-form-input v-on:blur="focusOut"  v-model="contentDismiss" placeholder="Enter your website"></b-form-input>
        </div>
        </div>

        <v-btn color="primary" @click="()=>{e6 = 9;block=true}">Ok</v-btn>
        <v-btn @click="e6 = 3" text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
    <pre v-if="block"><code>
      <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&nbsp;<span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"</span> <span class="hljs-attr">data-cfasync</span>=<span class="hljs-string">"false"</span>&gt;</span>
      </code>
    </pre>
        <pre v-if="block"><code>
      <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&nbsp;<span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"</span> <span class="hljs-attr">data-cfasync</span>=<span class="hljs-string">"false"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
      {{
        `window.cookieconsent.initialise({
              palette: {
              popup: {
                background: ${this.backgroundPopup}
              },
              button: {
                background: ${this.backgroundButton},
                text: ${this.buttonText}
              }
            },
            showLink: ${this.showLink},
            theme: ${this.theme},
            position: ${this.position},
            type: ${this.typeOpt},
            content: {
              message: ${this.contentMessage},
              message: ${this.contentHref},
              dismiss: ${this.contentDismiss},
              deny: ${this.contentDeny},
              link: ${this.contentLink},
              allow: ${this.contentDeny},
              href: ${this.contentHref},
              policy: 'Cookie Policy',
            }
            })`
        }}
      <span class="hljs-tag">&lt;<span class="hljs-name">/script</span>&gt;</span>

</code></pre>
    <div style="height:100px"></div>
  </v-container>
</template>

<script>
// import CookieConsent from 'vue-cookieconsent-component'
export default {
  name: "HelloWorld",
  //     components: {
  //   CookieConsent
  // },
  mounted() {
    // window.cookieconsent.initialise(this.layoutConsent);
    this.change();
    // console.log(window.cookieconsent);
  },
  data() {
      return {
        e6: 1,
        backgroundPopup:"#eaf7f7",
        textPopup:"#5c7291",
        backgroundButton:'#56cbdb',
        buttonText:"#ffffff",
        showLink:true,
        theme:"classic",
        position:"top",
        typeOpt:"opt-out",
        contentMessage:"This website uses cookies to ensure you get the best experience on our website",
        contentDismiss:"GOT IT",
        contentDeny:"exit",
        contentLink:"learn more",
        contentHref:"https://www.cookiesandyou.com",
        contentAllow:"Allow cookies",
        contentHeader: "Cookies header",
        options: [
          { text: 'Banner Top', value: 'top' },
          { text: 'Banner Bottom ', value: 'bottom' },
          { text: 'Bottom Floating Left', value: 'bottom-left' },
          { text: 'Top Floating Left', value: 'top-left' }
        ],
        optionsTheme: [
          { text: 'Block', value: 'Block' },
          { text: 'classic ', value: 'classic' },
          { text: 'edgeless', value: 'edgeless' }
        ],
      }
    },
  computed: {

  },
  watch: {
    position(){
      document.getElementsByClassName('cc-window')[0].style.visibility = 'hidden';
      this.change();
    },
    theme(){
      document.getElementsByClassName('cc-window')[0].style.visibility = 'hidden';
      this.change();
    },
    contentLink(){
      document.getElementsByClassName('cc-window')[0].style.visibility = 'hidden';
      this.change();
    },
    contentHref(){
      document.getElementsByClassName('cc-window')[0].style.visibility = 'hidden';
      this.change();
    },

},
methods: {
  focusOut(){
document.getElementsByClassName('cc-window')[0].style.visibility = 'hidden';
      this.change();
  },
  change(){
    let data = {
      palette: {
        popup: {
          background: this.backgroundPopup
        },
        button: {
          background: this.backgroundButton,
          text: this.buttonText
        }
      },
      showLink: this.showLink || "",
      theme: this.theme,
      position: this.position,
      type: this.typeOpt,
      layout:"phuong",
      content: {
        header: this.contentHeader,
        message: this.contentMessage,
        dismiss: this.contentDismiss,
        deny: this.contentDeny,
        link: this.contentLink,
        allow: this.contentAllow,
        href: this.contentHref,
        policy: 'Cookie Policy',
      }
    }
    window.cookieconsent.initialise(data);
  }
}
};
</script>
<style lang="scss">
//   /*
//     CookieConsent
//   */
// @import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent";
// // example or use it
// @import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent-transition";
// @import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent";
</style>