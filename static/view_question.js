$(document).ready(() => {
  if (!$("input[type=radio][name=type][value=multi]").prop('checked')) {
    $('#multi-options').hide()
  }
  $(".form-check-input").change(function() {
    if (this.value === "multi") {
      $('#multi-options').show()
    }
    else {
      $('#multi-options').hide()
    }
  })

  $("#btn-multi-add, #btn-multi-remove").click(function() {
    const id = $(this).attr("id")
    if (id === "btn-multi-add"){
      const length = $('#multi-options > div').length
      const letter = String.fromCharCode(65 + length)
      $('#multi-options > div').last().after(multipleChoiceInput(letter))
    }
    if (id === "btn-multi-remove"){
      $('#multi-options > div').last().remove()
    }
    
    const len = $('#multi-options > div').length
    $("#btn-multi-add").prop("disabled", len > 5)
    $("#btn-multi-remove").prop("disabled", len < 3)
  })
})

const multipleChoiceInput = (letter) => `
<div class="form-group">
  <div class="input-group">
    <div class="input-group-addon">(${letter})</div>
    <input type="text"
      class="form-control"
      name="answers-${letter}"
      placeholder="Answer ${letter}..."
    >
  </div>
</div>
`