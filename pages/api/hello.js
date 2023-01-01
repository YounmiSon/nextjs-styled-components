export default function handler(req, res) {
  // express.js와 같은 백엔드 패턴에 따라 응답
  res.status(200).json({ name: "test_name" });
}
