exports.handler = async function (event) {
  console.log("request:", JSON.stringify(event));

  // return response back to upstream caller
  return sendRes(200, "HELLLOOO");
};

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "text/html",
    },
    body: body,
  };
  return response;
};
