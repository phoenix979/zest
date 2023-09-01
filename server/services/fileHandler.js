const processFiles = (files) => {
    const resourcesFile = files['resources'][0].buffer.toString();
    const prowlerFile = files['prowler'][0].buffer.toString();

    const resources = resourcesFile.trim().split('\n');
    const prowlerOutput = JSON.parse(prowlerFile);

    const failedFindings = prowlerOutput.filter(finding => finding.Status === 'FAIL');

    // Create a map to link accountId to its findings.
    const findingsMap = new Map();
    failedFindings.forEach(finding => {
        const findingsForAccount = findingsMap.get(finding.ResourceId) || new Set();
        findingsForAccount.add(finding.CheckTitle); // Using Set to ensure uniqueness
        findingsMap.set(finding.ResourceId, findingsForAccount);
    });

    const results = [];

    resources.forEach(resource => {
        const accountId = resource.split(':')[4];
        const findingsForResource = findingsMap.get(accountId);

        if (findingsForResource && findingsForResource.size) {
            results.push({
                resource: resource,
                findings: Array.from(findingsForResource) // Convert the set back to an array
            });
        }
    });

    return results;
};

module.exports = { processFiles };