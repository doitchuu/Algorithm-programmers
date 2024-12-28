function convertTimeToSeconds(time) {
   const times = time.split(":").map(Number);
   return times[0] * 60 + times[1];
 }

function solution(video_len, pos, op_start, op_end, commands) {
  let timeResult = convertTimeToSeconds(pos);
  const startTime = convertTimeToSeconds(op_start);
  const endTime = convertTimeToSeconds(op_end);
  const videoTime = convertTimeToSeconds(video_len);
 
  
  for (let i = 0; i < commands.length; i++) {
    if (timeResult >= startTime && timeResult < endTime) {
      timeResult = endTime;
    }
    
    if (commands[i] === "next") {
      timeResult += 10;
    } else {
      timeResult -= 10;
    }
    
    if (timeResult > videoTime) {
      timeResult = videoTime;
    }
    
    if (timeResult < 0) {
      timeResult = 0;
    }
  }

  
  if (timeResult >= startTime && timeResult < endTime) {
    timeResult = endTime;
  }
  
  const minutes = Math.floor(timeResult / 60);
  const seconds = Math.abs((60 * minutes) - timeResult);
  
  return `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`;
}