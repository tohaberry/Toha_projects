
<!-- Remember to include jQuery :) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

<!-- jQuery Modal -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" /


<a href="ajax.html" rel="modal:open">example</a>



jQuery Modal
The simplest modal you ever did see.

Automatic binding using HTML semantics
No images & light-weight (about 1k minified)
Simple markup makes it easy to style
Attach custom behaviour using jQuery events
Close with click or ESC key
Built by @kylefox 🍸
SPONSOR
 Incentivize and reward your best promoters.
 Rewardful: simple affiliate programs for Stripe.
Rewardful is a simple way for SaaS companies to create affiliate and referral programs with Stripe. Just connect your account and let us track referrals, discounts, and commissions for you!
Learn more →
# Install
The simplest method is to use the hosted version from cdnjs:

<!-- Remember to include jQuery :) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

<!-- jQuery Modal -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
Refer to the README for more installation options.

# Example 1: Open & Close with links
Embed modal HTML in document
Create a link with rel="modal:open" and set the href attribute to the modal's DOM id.
<!-- Modal HTML embedded directly into document -->
<div id="ex1" class="modal">
  <p>Thanks for clicking. That felt good.</p>
  <a href="#" rel="modal:close">Close</a>
</div>

<!-- Link to open the modal -->
<p><a href="#ex1" rel="modal:open">Open Modal</a></p>
Open Modal
# Example 2: styled login form & events
This example demonstrates how visually customizable the modal is.

Open Modal
# Example 3: adjusting to content
This example shows how modals are centered automatically. It also demonstrates how a vertical scrollbar appears whenever the modal content overflows.

Open Modal
# Example 4: AJAX
Use rel="modal:open" to automatically load the page contents into a modal via AJAX:

<a href="ajax.html" rel="modal:open">example</a>
Open Modal

You can also manually load AJAX pages into a modal. Note that the AJAX response must be wrapped in a div with class modal:

<!-- Normal link -->
<a href="ajax.html" id="manual-ajax">second example</a>
// Open modal in AJAX callback
$('#manual-ajax').click(function(event) {
  event.preventDefault();
  this.blur(); // Manually remove focus from clicked link.
  $.get(this.href, function(html) {
    $(html).appendTo('body').modal();
  });
});
<!-- AJAX response must be wrapped in the modal's root class. -->
<div class="modal">
  <p>Second AJAX Example!</p>
</div>
Open Modal
# Example 5: the un-closable window
This demonstrates how to disable the default methods of closing the modal.

 $("#sticky").modal({
  escapeClose: false,
  clickClose: false,
  showClose: false
});
Open Modal
# Example 6: Multiple Modals
By default, only one modal can be open at a time. If you open a new modal while an existing modal is open, the existing modal is closed first.

Open Modals

However, if you need to stack multiple modals at the same time, just set the closeExisting option to false.

$('#sub-modal').modal({
  closeExisting: false
});
Open Modals
# Example 7: Fade Transitions
You can achieve a simple fade effect by specifying the fadeDuration option.

 $("#fade").modal({
  fadeDuration: 100
});
Open Modal

You can also use fadeDelay to control the point during the overlay's fade in at which the modal fades in. For example, to fade in the modal when the overlay transition is 50% complete:

 $("#fade").modal({
  fadeDuration: 1000,
  fadeDelay: 0.50
});
Open Modal

The default value is 1.0, meaning the window transition begins once the overlay transition has finished. Values greater than 1.0 mean there is a delay between the completed overlay transition and the start of the window transition:

 $("#fade").modal({
  fadeDuration: 1000,
  fadeDelay: 1.75 // Will fade in 750ms after the overlay finishes.
});
Open Modal

Tip: set fadeDelay: 0 to have the overlay and window fade in simultaneously.

In the spirit of keeping this library small, fading is the only supported transition. When the modal is closed, both the overal and window transition out simultaneously.

# Example 8: Custom Class for Close Button
This example demonstrates how to add extra classes to the close button (for custom styles for the close button):

 $("#custom-close").modal({
  closeClass: 'icon-remove',
  closeText: '!'
});
And then of course your custom CSS

.modal a.close-modal[class*="icon-"] {
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  color: #fff;
  line-height: 1.25;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
  background: #900;
  border: 2px solid #fff;
  -webkit-border-radius:  26px;
  -moz-border-radius:     26px;
  -o-border-radius:       26px;
  -ms-border-radius:      26px;
  -moz-box-shadow:    1px 1px 5px rgba(0,0,0,0.5);
  -webkit-box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  box-shadow:         1px 1px 5px rgba(0,0,0,0.5);
}
Open Modal