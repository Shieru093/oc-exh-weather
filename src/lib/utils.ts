// utcを日本時間に変換する関数
export function convertUnixTimestampToJST(utc: number): string {
	const utcDate = new Date(utc * 1000); // utcからdateオブジェクトを生成
	utcDate.setHours(utcDate.getHours() + 9); // utcにjstの時差（９時間）を加える

	// 時と分を格納
	const month = utcDate.getUTCMonth() + 1;
	const date = utcDate.getUTCDate().toString();
	const hour = utcDate.getUTCHours().toString().padStart(2, '0');
	const minute = utcDate.getUTCMinutes().toString().padStart(2, '0');

	// HH:mm形式の文字列で返す
	return `${month.toString()}/${date} ${hour}:${minute}`;
}

// ChatGPTが生成した変換関数
// export function convertUnixTimestampToJST(utc: number) {
// 	const date = new Date(utc * 1000);
// 	const jstOffset = 9 * 60 * 60 * 1000;
// 	const jstDate = new Date(date.getTime() + jstOffset);
// 	const hours = jstDate.getUTCHours().toString().padStart(2, '0');
// 	const minutes = jstDate.getUTCMinutes().toString().padStart(2, '0');
// 	return `${hours}:${minutes}`;
// }
