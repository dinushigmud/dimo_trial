$(document).ready(() => {
  toggleChoicesVisibility()
  $(".form-check-input").change(function() {
    toggleChoicesVisibility()
  })

  toggleButtonState()
  $("#btn-multi-add, #btn-multi-remove").click(function() {
    const id = $(this).attr("id")
    if (id === "btn-multi-add") {
      const length = $('#multi-options > div').length
      $('#multi-options > div').last().after(multipleChoiceInput(length))
    }
    if (id === "btn-multi-remove") {
      $('#multi-options > div').last().remove()
    }
    toggleButtonState()
  })
})

const toggleChoicesVisibility = () => {
  if ($("#multi-check").is(':checked')) {
    $('#multi-options').show()
  }
  else {
    $('#multi-options').hide()
  }
}

const toggleButtonState = () => {
  const len = $('#multi-options > div').length
  $("#btn-multi-add").prop("disabled", len > 5)
  $("#btn-multi-remove").prop("disabled", len < 3)
}

const multipleChoiceInput = (index) => `
<div class="form-group">
  <div class="input-group">
    <div class="input-group-addon">(${String.fromCharCode(65 + index)})</div>
    <input type="text"
      class="form-control"
      name="answers-${index}"
      placeholder="Answer ${String.fromCharCode(65 + index)}..."
    >
  </div>
</div>
`
