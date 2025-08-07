import { Trello } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-end items-center text-center md:text-left">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Trello className="h-7 w-7 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">
              TrelloClone
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
