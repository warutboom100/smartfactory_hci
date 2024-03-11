function calculateQuality(data) {
  const countSuccessStatus = (orderData) => {
    let successCount = 0;
    orderData.forEach((order) => {
      if (order.status === 'SUCCESS') {
        successCount++;
      }
    });
    return successCount;
  };
  const countPendingStatus = (orderData) => {
    let PendingCount = 0;
    orderData.forEach((order) => {
      if (order.status === 'PENDING') {
        PendingCount++;
      }
    });
    return PendingCount;
  };
  const countFailureStatus = (orderData) => {
    let FailureCount = 0;
    orderData.forEach((order) => {
      if (order.status === 'FAILURE') {
        FailureCount++;
      }
    });
    return FailureCount;
  };

  return (countSuccessStatus(data)/data.length);
}

export default calculateQuality;