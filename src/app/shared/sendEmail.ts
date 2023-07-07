import emailjs from '@emailjs/browser';
export function SendEmailVerification(email: any, to_name: any) {
  let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let transaction = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let charLength = characters.length;
  let transLength = transaction.length;
  let gatePass = "";
  let transactionCode = "";

  for(let i = 0; i < 10; i++) {
    gatePass += characters.charAt(Math.floor(Math.random() * charLength - 1));
    transactionCode += transaction.charAt(Math.floor(Math.random() * transLength - 1));
  }

  const templateParams = {
    email: email,
    from_name: "PUPAA",
    to_name: to_name,
    message: "This is your transaction Code: " + transactionCode + "\n" + "This is your gate pass: " + gatePass,
  };
  emailjs.send('service_fwwr4n8', 'template_y8e78bq', templateParams, 'W6XKHJBpxt1bv871W')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
  return [gatePass, transactionCode];
}
