import { Textarea } from "@/components/ui/textarea"

type Todo = {
  id: number
  description: string
  status: string
}

const todos: Todo[] = [
  {
    id: 1,
    description: "撰寫專案提案，包括項目範圍、目標和時間表。",
    status: "未完成",
  },
  {
    id: 2,
    description: "設計用戶界面，包括介面元素和佈局設計。",
    status: "未完成",
  },
  {
    id: 3,
    description: "開始前端開發工作，建立應用程序的前端部分。",
    status: "未完成",
  },
  {
    id: 4,
    description: "開始後端開發工作，建立應用程序的後端部分。",
    status: "未完成",
  },
  {
    id: 5,
    description: "測試應用程序，並修復任何錯誤或問題。",
    status: "未完成",
  },
  {
    id: 6,
    description: "將應用程序部署到生產環境中，使其可供使用。",
    status: "未完成",
  },
  {
    id: 7,
    description: "為用戶創建一份使用手冊，以協助他們使用應用程序。",
    status: "未完成",
  },
]

function TaskifyTodoCard() {
  return (
    <div className="flex flex-row p-5">
      <div>
        <div className="w-500 h-auto mx-2 p-3 rounded bg-slate-300">
          <Textarea defaultValue="待完成" />
          {todos.map((todo) => (
            <Textarea key={todo.id} defaultValue={todo.description} />
          ))}
        </div>
      </div>
      <div>
        <div className="w-500 h-auto mx-2 p-3 rounded bg-slate-300">
          <Textarea defaultValue="進度中" />
        </div>
      </div>
      <div>
        <div className="w-500 h-auto mx-2 p-3 rounded bg-slate-300">
          <Textarea defaultValue="已完成" />
        </div>
      </div>
    </div>
  )
}
export default TaskifyTodoCard
