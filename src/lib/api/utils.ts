export function cleanDefenderData(data: any) {
  // Check if the data is valid and has the "Results" property
  if (!data || !Array.isArray(data.Results)) {
    console.error('Invalid data: Missing or invalid "Results" property');
    return []; // Return an empty array if data is invalid
  }

  // Clean and transform the data
  return data.Results.map((email: any) => ({
    Timestamp: email.Timestamp ? new Date(email.Timestamp).toLocaleString('en-AU'): 'N/A', // Handle null/undefined
    NetworkMessageId: email.NetworkMessageId || 'N/A', // Handle null/undefined
    SenderFromAddress: email.SenderFromAddress || 'N/A', // Handle null/undefined
    RecipientEmailAddress: email.RecipientEmailAddress || 'N/A', // Handle null/undefined
    Subject: email.Subject || 'N/A', // Handle null/undefined
    SenderIPv4: email.SenderIPv4 || 'N/A', // Handle null/undefined
    FileName: email.FileName || [], // Default to empty array if missing
    SHA256: email.SHA256 || [], // Default to empty array if missing
    ThreatNames: email.ThreatNames || 'N/A', // Handle null/undefined
    Urls: email.Urls || [], // Default to empty array if missing
  }));
}