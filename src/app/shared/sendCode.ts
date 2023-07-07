import emailjs from '@emailjs/browser';
export function sendVerification(email: any, to_name: any) {
  const codes = "0123456789";
  const codesLength = codes.length;
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += codes.charAt(Math.floor(Math.random() * codesLength));
  }
  const templateParams = {
    email: email,
    from_name: "PUPAA",
    to_name: to_name,
    message: "This is your verification code: " + code,
  };
  emailjs.send('service_fwwr4n8', 'template_y8e78bq', templateParams, 'W6XKHJBpxt1bv871W')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);

	}, (err) => {
	   console.log('FAILED...', err);

	});
  return code;
}
