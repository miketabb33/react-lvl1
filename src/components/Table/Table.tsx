import TableRow from './TableRow'
import styles from './Table.module.scss'
import { prettyTitle } from '../../logic/prettyTitle'

type TableProps = {
  items: any[]
}

const Table = ({ items }: TableProps) => {
  return (
    <div className={styles.fixTableHead}>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.entries(items[0]).map(([k]) => (
              <th key={k}>{prettyTitle(k)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.number}>
              <TableRow item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
