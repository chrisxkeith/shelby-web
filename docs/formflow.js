$(document).ready(function() {
  $('input:radio[name=services]').change(function() {
    (new SelectionHandler().handle(this.value));
  });
});

class SelectionHandler {
  handle(button_value) {
    switch(button_value) {
      case'job_training':
        alert("job_training");
        break;
      case'job_placement':
        alert("job_placement");
        break;
      case'literacy':
        alert("literacy");
        break;
      default:
        alert('Unknown value: ' + button_value);
    }
  }
}
