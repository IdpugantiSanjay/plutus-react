import { PrimaryButton } from '../components/buttons/PrimaryButton'

export function LoginForm() {
  return (
    <form className={'form'}>
      <fieldset>
        <div>
          <label htmlFor="username">
            Username
            <div>
              <input id="username" type="text" required />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <div>
              <input id="password" type="password" required />
            </div>
          </label>
        </div>
        <div className={'actions'}>
          <PrimaryButton type={'submit'}>Login</PrimaryButton>
        </div>
      </fieldset>
    </form>
  )
}
