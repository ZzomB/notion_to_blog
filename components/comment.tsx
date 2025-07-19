// To enable comments:
// 1. Uncomment this component
// 2. Update repo, repoId, and categoryId with your own giscus settings
// 3. Visit https://giscus.app to get your settings

// export default function Comment() {
//   return (
//     <Giscus
//       id="comments"
//       repo="" 
//       repoId=""
//       category="Announcements"
//       categoryId=""
//       mapping="pathname"
//       strict="0"
//       reactionsEnabled="1"
//       emitMetadata="0"
//       inputPosition="bottom"
//       theme="preferred_color_scheme"
//       lang="ko"
//       loading="lazy"
//     />
//   )
// }
export default function Comment() {
  return (
    <div style={{ color: "#888", fontSize: "0.9rem", textAlign: "center" }}>
      댓글 기능은 아직 설정되지 않았습니다.
    </div>
  );
}
