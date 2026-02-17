# DEBUG NOTES - Rescue Ops

## Bug 1: State Mutation in `moveTask` (TaskBoard.jsx)

**How to Reproduce:**
1. Add a new task (e.g. "Fix login page", priority High).
2. The task appears in the "To Do" column.
3. Click the "Doing" button on the task card.
4. **Expected:** Task moves to the "Doing" column.
5. **Actual:** Task stays in "To Do". The UI does not update. If you then add a new task, the previously "moved" task may jump columns because the mutation did take effect on the underlying object — it just never triggered a re-render.

**Fix:** Replaced the direct mutation (`task.status = newStatus; return prev;`) with `.map()` that returns a new array containing a spread copy of the updated task: `prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))`. This gives React a new array reference with a new object, so it detects the change and re-renders.

---

## Bug 2: Stale State in `deleteTask` (TaskBoard.jsx)

**How to Reproduce:**
1. Add 3 tasks: "Task A", "Task B", "Task C".
2. Quickly click "Delete" on "Task A", then immediately click "Delete" on "Task B" (before the UI re-renders).
3. **Expected:** Both "Task A" and "Task B" are removed. Only "Task C" remains.
4. **Actual:** Only one of the two tasks is deleted. The other reappears because both delete calls filtered the same stale 3-task array, and the last `setTasks` call wins.

**Fix:** Changed `setTasks(tasks.filter(...))` to the functional updater form `setTasks((prev) => prev.filter((t) => t.id !== id))`. Using `prev` ensures each call operates on the latest state rather than a stale closure snapshot.

---

## Bug 3: Infinite Re-render Loop via `useEffect` (TaskBoard.jsx)

**How to Reproduce:**
1. Open the app in the browser.
2. Open the browser DevTools console.
3. **Expected:** The app loads normally with an empty board.
4. **Actual:** The page freezes or becomes extremely sluggish. The console shows repeated React warnings: `Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect...`

**Fix:** Removed the `useEffect` entirely. It served no purpose — spreading `tasks` into a new array on every change just created a new reference that triggered the effect again in an infinite loop. The `useEffect` import was also removed since it was no longer needed.

---

## Bug 4: Missing `key` Prop on TaskCard List (Column.jsx)

**How to Reproduce:**
1. Open the app and open the browser DevTools console.
2. Add 2 or more tasks.
3. **Expected:** No warnings in the console; tasks render and update correctly.
4. **Actual:** The console displays: `Warning: Each child in a list should have a unique "key" prop.` Reordering or moving tasks between columns may cause visual glitches where the wrong card appears to update.

**Fix:** Restored `key={task.id}` on the `<TaskCard>` element inside the `.map()` call. This gives React a stable, unique identifier for each list item so it can efficiently track additions, removals, and reorders.

---

## Bug 5: Double-Submit via Redundant `onClick` on Submit Button (TaskForm.jsx)

**How to Reproduce:**
1. Type "Deploy hotfix" in the task input and select priority "High".
2. Click "Add Task".
3. **Expected:** One task card labeled "Deploy hotfix" appears in the "To Do" column.
4. **Actual:** Two identical task cards both labeled "Deploy hotfix" with priority "High" appear in the "To Do" column.

**Fix:** Removed the redundant `onClick={() => onAdd(title.trim(), priority)}` from the submit button. The button's `type="submit"` already triggers the form's `onSubmit={handleSubmit}`, which is the single correct entry point. This also ensures all guardrail checks (duplicate title, max task limit) run before a task is added.
