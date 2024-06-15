import execute from '../../src/services/dummy-service.js'
import { helper } from '../../src/services/helper-service.js'

jest.mock('../../src/services/helper-service.js')

test('give a parameter in execute and result can be even or odd',()=>{
    helper.mockReturnValue(true)
    const result = execute()

    expect(result).toBe('even')
})

test('give a parameter in execute and result can be even or odd',()=>{
    helper.mockReturnValue(false)

    const result = execute()
    
    expect(result).toBe('odd')

})
