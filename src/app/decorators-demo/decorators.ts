
export function confirmFirst({ message }: { message: any }) {
  console.log("first")

  return (target: any, propertyKey: string, descpriptor: PropertyDescriptor) => {
    console.log(target)
    let oldFunction = descpriptor.value;
    descpriptor.value = function (...arg: any[]) {
      let confirmation = confirm(message)
      if (confirmation) {
        let result = oldFunction.apply(this, arg);
        return result;
      }
    }
  }
}

export let AnotheorDecorator = (target: any, propertyKey: string, descpriptor: PropertyDescriptor) => {

  console.log("second")
  let oldFunction = descpriptor.value;
  descpriptor.value = function (...arg: any[]) {
    let confirmation = confirm("message")
    if (confirmation) {
      let result = oldFunction.apply(this, arg);
      return result;
    }
  }
}

export function logOnError(target: any, propertyKey: string, descpriptor: PropertyDescriptor) {
  let oldFunction = descpriptor.value;
  descpriptor.value = function (...arg: any[]) {
    try {
      let result = oldFunction.apply(this, arg)
      return result
    } catch (e) {
      console.log(e)
    }
  }
}

