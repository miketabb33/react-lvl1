import { TextFieldProps } from './textfieldProps'
import textFieldStyles from './TextField.module.scss'
import selectorStyles from './Selector.module.scss'
import Chip, { ChipData } from '../Chip/Chip'

type SelectorProps = {
  textFieldProps: TextFieldProps
  chipsData: ChipData[]
  onChipXClick: (id: string) => void
  inputRef?: React.RefObject<HTMLInputElement>
}

const Selector = ({
  textFieldProps,
  chipsData: chips,
  onChipXClick,
  inputRef,
}: SelectorProps) => {
  const { type, value, onChange, placeholder, name } = textFieldProps

  const valueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div
      className={`${textFieldStyles.textFieldShared} ${selectorStyles.selector}`}
    >
      <div className={selectorStyles.chipWell}>
        {chips.map((chip) => (
          <Chip key={chip.id} chipData={chip} onClickClose={onChipXClick} />
        ))}
      </div>

      <input
        type={type}
        value={value}
        onChange={valueChanged}
        placeholder={placeholder}
        required={false}
        name={name}
        className={selectorStyles.textField}
        ref={inputRef}
      />
    </div>
  )
}

export default Selector
