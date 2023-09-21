class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some((alarm) => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
			//return;
		}

		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		});
	}

	removeClock(time) {
		const filteredAlarms = this.alarmCollection.filter(
			alarm => alarm.time !== time
		);
		this.alarmCollection = filteredAlarms;
	}

	getCurrentFormattedTime() {
	//	return new Date().toLocaleTimeString().slice(0, -3);
		const timeNow = new Date();
		const hh = "" + timeNow.getHours();
		const mm = "" + timeNow.getMinutes();
		return hh.padStart(2, "0") + ":" + mm.padStart(2, "0");
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}