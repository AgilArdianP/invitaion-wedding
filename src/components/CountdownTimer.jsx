import { useState, useEffect } from 'react';

function CountdownTimer({ date }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(date) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [date]);

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-600">{timeLeft.days}</div>
                    <div className="text-sm mt-1">Hari</div>
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-600">{timeLeft.hours}</div>
                    <div className="text-sm mt-1">Jam</div>
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-600">{timeLeft.minutes}</div>
                    <div className="text-sm mt-1">Menit</div>
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-600">{timeLeft.seconds}</div>
                    <div className="text-sm mt-1">Detik</div>
                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;