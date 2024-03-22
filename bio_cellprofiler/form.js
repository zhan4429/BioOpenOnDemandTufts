'use strict'


/*
 *  * Morgan is well aware that this is some ugly JS but its in production...working...so he is going to let it stay this way...
 *
 *   code references lovingly stolen from https://github.com/OSC/bc_osc_ansys_workbench/blob/master/form.js
 *
 *    * */

function toggle_gpu_partition() {
  let gpu_partition = $('#batch_connect_session_context_gpu_partition');
  let gpu_checkbox = document.getElementById("batch_connect_session_context_gpu_checkbox");
if(gpu_checkbox.checked === true)  {
   gpu_partition.parent().show();
  } else {
   gpu_partition.parent().hide();
  }
}


toggle_gpu_partition()

let checkbox_trigger = $('#batch_connect_session_context_gpu_checkbox');
checkbox_trigger.change(toggle_gpu_partition);

