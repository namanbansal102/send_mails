export async function POST(request:any,res:any) {
    try {
        // Parse the incoming JSON reques
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        const req = await request.json();
        const { code, language,id,secret } = req;

        // Prepare the payload for JDoodle API
        const payload = {
            script: code,
            language: language,
            versionIndex: "0",
            clientId: id, // JDoodle Client ID
            clientSecret: secret // JDoodle Client Secret
        };

        // Send request to JDoodle API
        const response = await fetch('https://send-chitkara.vercel.app/api/mycompiler', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        // Parse the response from JDoodle API
        const result = await response.json();

        // Check if we got output and return it
        if (result.output) {
            return new Response(JSON.stringify({ success: true, output: result.output }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            return new Response(JSON.stringify({ success: false, error: 'No output from JDoodle' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        console.error('Error executing code:', error);
        return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
