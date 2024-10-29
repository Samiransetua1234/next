import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Students</h1>
      <br />
      <br />
      <ul>
        <li>
          <Link href="/students/1">Samiran</Link>
        </li>
        <li>
          <Link href="/students/2">Ritam</Link>
        </li>
        <li>
          <Link href="/students/3">Swastik</Link>
        </li>
        <li>
          <Link href="/students/4">Sujay</Link>
        </li>
        <li>
          <Link href="/students/5">Argha</Link>
        </li>
        <li>
          <Link href="/students/6">Shuvam</Link>
        </li>
        <li>
          <Link href="/students/7">Pijush</Link>
        </li>
      </ul>
    </div>
  );
}
