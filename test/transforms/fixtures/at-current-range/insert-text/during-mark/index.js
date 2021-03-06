
import assert from 'assert'

export default function (state) {
  const { document, selection } = state
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 2,
    focusKey: first.key,
    focusOffset: 2
  })

  const next = state
    .transform()
    .moveTo(range)
    .insertText('a')
    .apply()

  assert.deepEqual(
    next.selection.toJS(),
    range.moveForward().toJS()
  )

  return next
}
