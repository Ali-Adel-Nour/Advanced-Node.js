const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// New Timers,tasks,operations are recorded from myFile running
myFile.runContents()

function shouldContinue(){
  //check one: Any Pending setTimeout,setInterval,setImmediate?
  //Check two: Any Pending OS tasks? (Like listening to port)
  //Check three: Any Pending Long running operations? ( like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

//Entrie body executes in one 'tick'

while(shouldContinue()) {
  //1- Node looks at pendingTimers and sees if any functions are ready to called
  //like seTimeout, seInterval

  //2-Node looks at pendingOSTasks and pendingOperations and calls relevant callback

  //3-pause execution.Continue When
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // -a timer is about to complete

  //4- look at pendingTimers.Call any setImmdiate
}