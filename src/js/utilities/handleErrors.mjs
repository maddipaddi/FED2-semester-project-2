export async function handleErrors(response) {
  if (!response.ok) {
    const errorData = await response.json();

    const errorDetails = {
      status: errorData.statusCode,
      message: errorData.status,
    };

    throw errorDetails;
  }
}
