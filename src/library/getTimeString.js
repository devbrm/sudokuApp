const getTimeString = (time) => {
  const h = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0"),
    m = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

  const timeString = h < 0 ? `${h} : ${m} : ${s}` : `${m} : ${s}`;
  return timeString;
};

export default getTimeString