export default function TechBadge({ tech }: { tech: string }) {
  return (
    <li className="flex">
      <span className="text-md px-3 py-1 bg-gray-800 text-white rounded-full border border-gray-700 shadow-sm">
        {tech}
      </span>
    </li>
  );
}
