import { useEffect, useState } from 'react'

const Countdown = () => {

  const targetDate = new Date("2024-11-10T09:00:00").getTime();

  // const [timeLeft, setTimeLeft] = useState({
  //   days: 311,
  //   hours: 23,
  //   minutes: 30,
  //   seconds: 43
  // })

  const calculateInitialTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateInitialTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isTimeUp = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(prevTime => {
  //       if (prevTime.seconds > 0) {
  //         return { ...prevTime, seconds: prevTime.seconds - 1 }
  //       } else if (prevTime.minutes > 0) {
  //         return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
  //       } else if (prevTime.hours > 0) {
  //         return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
  //       } else if (prevTime.days > 0) {
  //         return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
  //       } else {
  //         clearInterval(timer)
  //         return prevTime
  //       }
  //     })
  //   }, 1000)

  //   return () => clearInterval(timer)
  // }, [])

  return (
    <div className="relative h-[350px] w-full overflow-hidden mt-12">
      <div className="absolute inset-0 bg-[url('@/assets/images/flower.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="mb-4 text-4xl cormorant italic">Don't miss it</h2>
        <div className="flex sm:space-x-14 space-x-5">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="flex sm:h-20 sm:w-20 w-14 h-14 items-center justify-center rounded-full border-2 border-white bg-white/20 sm:text-2xl text-lg font-bold transition-transform hover:scale-125">
                {isTimeUp ? 0 : value}
              </div>
              <span className="mt-1 text-sm capitalize">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Countdown;