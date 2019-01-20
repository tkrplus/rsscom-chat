import UUID from '../UUID'

describe('UUID', () => {
  test('generate', () => {
    const id = UUID.generate()
    expect(/[0-9A-F]{32}/.test(id)).toBe(true)
  })
}
)
