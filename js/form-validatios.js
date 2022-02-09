$(function() {
  $("form[name='form-data']").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
        maxlength: 15
      },
      surname: {
        required: true,
        minlength: 4,
        maxlength: 20
      },
      email: {
        required: true,
        email: true
      },
      gender: "required",
      checkin: "required",
      checkout: "required",
      quantity:"required",
      cardNumber: {
        required: true,
        maxlength: 16,
        minlength: 16
      },
      expiredDate: {
        required: true,
        minlength: 5,
        maxlength: 5
      },
      cvv: {
        required: true,
        minlength: 3,
        maxlength: 3
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});