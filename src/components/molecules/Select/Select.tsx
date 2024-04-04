import { Option } from '@Types/index'

export type SelectProps<T> = {
  options: Option<T>[]
  onChange: (value: T) => void
  selected: T
}

const Select = <T,>({ options, onChange, selected }: SelectProps<T>) => (
  <div className="inline-block relative w-64">
    <select
      className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state"
      onChange={(event) => onChange(JSON.parse(event.target.value) as T)}
    >
      {options.map(({ label, value }, index) => (
        <option
          key={`user-option-${index}`}
          value={JSON.stringify(value)}
          selected={JSON.stringify(selected) === JSON.stringify(value)}
        >
          {label}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M14.317 4.874a.702.702 0 0 1 .979 0 .68.68 0 0 1 0 .969l-4.669 4.888a.697.697 0 0 1-.979 0L5 5.844a.68.68 0 0 1 0-.969.703.703 0 0 1 .979 0l3.34 3.501L14.317 4.874z" />
      </svg>
    </div>
  </div>
)

export default Select
