export const handler = async (event) => {
  console.log("Event:", JSON.stringify(event));

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Hello from orders-api Lambda!",
      time: new Date().toISOString(),
    }),
  };
};
