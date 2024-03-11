function calculatePerformance(data) {
  const totalCount = data.length;

  const totalRunTimeMinutes = data.reduce((acc, item) => {
    const startTime = new Date(item.time_order_begin);
    const endTime = new Date(item.time_order_end);
    const processingTime = endTime - startTime;
    return acc + processingTime;
  }, 0) / (1000 * 60); // แปลงเวลาเป็นนาที

  const idealRunRate = totalRunTimeMinutes / totalCount;

  const performancePercentage = (totalCount / totalRunTimeMinutes) / idealRunRate;

  return performancePercentage;
}

export default calculatePerformance;
